"use client";

import { useMemo, useState, useTransition } from "react";
import { Pencil, Plus, Search, Trash2, Image as ImageIcon, Loader2, Eye } from "lucide-react";
import { upload } from "@imagekit/next";

import {
  createTool,
  deleteTool,
  toggleToolPublished,
  updateTool,
} from "@/src/server/admin-tools";

import type { Tool } from "@/src/db/schema";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { ToolsCategories } from "../../others/tools-category";
import Link from "next/link";

type Props = {
  tools: Tool[];
};



export function ToolsAdmin({ tools: initialTools }: Props) {
  const [tools, setTools] = useState(initialTools);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [editingTool, setEditingTool] = useState<Tool | null>(null);
  const [isPending, startTransition] = useTransition();

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const searchValue = search.toLowerCase();
      const matchesSearch =
        tool.title.toLowerCase().includes(searchValue) ||
        tool.description.toLowerCase().includes(searchValue) ||
        tool.madeBy.toLowerCase().includes(searchValue) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(searchValue));

      const matchesCategory = category === "all" || tool.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [tools, search, category]);

  function handleDelete(id: string) {
    const confirmed = window.confirm("Are you sure you want to delete this tool?");
    if (!confirmed) return;

    startTransition(async () => {
      await deleteTool(id);
      setTools((current) => current.filter((tool) => tool.id !== id));
    });
  }

  function handleToggle(tool: Tool) {
    startTransition(async () => {
      await toggleToolPublished(tool.id, !tool.isPublished);
      setTools((current) =>
        current.map((item) =>
          item.id === tool.id ? { ...item, isPublished: !item.isPublished } : item
        )
      );
    });
  }

  function handleEdit(tool: Tool) {
    setEditingTool(tool);
    setOpen(true);
  }

  function handleAdd() {
    setEditingTool(null);
    setOpen(true);
  }

  async function handleSubmit(data: {
    title: string;
    slug: string;
    description: string;
    link: string;
    madeBy: string;
    category: string;
    tags: string[];
    isPublished: boolean;
    coverImage?: string;
  }) {
    startTransition(async () => {
      if (editingTool) {
        await updateTool(editingTool.id, data);
        setTools((current) =>
          current.map((item) =>
            item.id === editingTool.id ? { ...item, ...data } : item
          )
        );
      } else {
        const result = await createTool(data);
        setTools((current) => [
          {
            id: result.id,
            ...data,
            coverImage: data.coverImage ?? null,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          ...current,
        ]);
      }

      setOpen(false);
      setEditingTool(null);
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Tools</h1>
          <p className="text-sm text-muted-foreground">
            Manage tools displayed on your website.
          </p>
        </div>

        <Dialog
          open={open}
          onOpenChange={(value) => {
            setOpen(value);
            if (!value) setEditingTool(null);
          }}
        >
          <DialogTrigger
            render={
              <Button onClick={handleAdd}>
                <Plus className="mr-2 size-4" />
                Add Tool
              </Button>
            }
          />

          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingTool ? "Edit Tool" : "Add Tool"}</DialogTitle>
            </DialogHeader>

            <ToolForm
              tool={editingTool}
              onSubmit={handleSubmit}
              isPending={isPending}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search tools..."
            className="pl-9"
          />
        </div>

        <Select value={category} onValueChange={(value) => setCategory(value ?? "")}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {ToolsCategories.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Tools ({filteredTools.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="px-6 py-4 font-medium">Tool</th>
                  <th className="px-6 py-4 font-medium">Category</th>
                  <th className="px-6 py-4 font-medium">Made By</th>
                  <th className="px-6 py-4 font-medium">Tags</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTools.map((tool) => (
                  <tr key={tool.id} className="border-b last:border-0">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {tool.coverImage ? (
                          <img
                            src={tool.coverImage}
                            alt={tool.title}
                            className="size-10 rounded-md object-cover border"
                          />
                        ) : (
                          <div className="flex size-10 items-center justify-center rounded-md border bg-muted text-muted-foreground">
                            <ImageIcon className="size-5" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium">{tool.title}</p>
                          <p className="max-w-xs truncate text-xs text-muted-foreground">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <Badge variant="secondary">{tool.category}</Badge>
                    </td>

                    <td className="px-6 py-4">{tool.madeBy}</td>

                    <td className="px-6 py-4">
                      <div className="flex max-w-56 flex-wrap gap-1">
                        {tool.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {tool.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{tool.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <button
                        type="button"
                        onClick={() => handleToggle(tool)}
                        disabled={isPending}
                        className="cursor-pointer"
                      >
                        <Badge variant={tool.isPublished ? "default" : "secondary"}>
                          {tool.isPublished ? "Published" : "Draft"}
                        </Badge>
                      </button>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          render={<Link href={`/tools/${tool.slug}`} />}

                        >
                          <Eye className="size-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleEdit(tool)}
                        >
                          <Pencil className="size-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-destructive"
                          onClick={() => handleDelete(tool.id)}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredTools.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-16 text-center text-muted-foreground">
                      No tools found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ToolForm({
  tool,
  onSubmit,
  isPending,
}: {
  tool: Tool | null;
  onSubmit: (data: {
    title: string;
    slug: string;
    description: string;
    link: string;
    madeBy: string;
    category: string;
    tags: string[];
    isPublished: boolean;
    coverImage?: string;
  }) => void;
  isPending: boolean;
}) {
  const [title, setTitle] = useState(tool?.title ?? "");
  const [slug, setSlug] = useState(tool?.slug ?? "");
  const [description, setDescription] = useState(tool?.description ?? "");
  const [link, setLink] = useState(tool?.link ?? "");
  const [madeBy, setMadeBy] = useState(tool?.madeBy ?? "");
  const [category, setCategory] = useState(tool?.category ?? "");
  const [tags, setTags] = useState(tool?.tags.join(", ") ?? "");
  const [isPublished, setIsPublished] = useState(tool?.isPublished ?? true);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(tool?.coverImage ?? null);
  const [isUploading, setIsUploading] = useState(false);

  const slugify = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  };

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!tool) {
      setSlug(slugify(newTitle));
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setIsUploading(true);

    try {
      let coverImageUrl = tool?.coverImage ?? "";

      // Agar user ne nayi file select ki hai toh ImageKit par upload karein
      if (selectedFile) {
        const authRes = await fetch("/api/tools/upload-auth");
        const authData = await authRes.json();

        const uploadResponse = await upload({
          file: selectedFile,
          fileName: `${slug || slugify(title)}-${Date.now()}-${selectedFile.name}`,
          token: authData.token,
          expire: authData.expire,
          signature: authData.signature,
          publicKey: authData.publicKey,
          folder: "/tools-covers",
        });

        coverImageUrl = uploadResponse.url ?? "";
      }

      onSubmit({
        title: title.trim(),
        slug: slug.trim() || slugify(title),
        description: description.trim(),
        link: link.trim(),
        madeBy: madeBy.trim(),
        category,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        isPublished,
        coverImage: coverImageUrl,
      });
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Image upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid gap-2">
        <label className="text-sm font-medium">Title</label>
        <Input
          value={title}
          onChange={handleTitleChange}
          placeholder="Figma"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Slug</label>
        <Input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="figma"
          required
        />
        <p className="text-xs text-muted-foreground">URL-friendly version of the title.</p>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Cover Image</label>
        {previewImage && (
          <div className="relative h-32 w-full overflow-hidden rounded-md border">
            <img src={previewImage} alt="Cover preview" className="h-full w-full object-cover" />
          </div>
        )}
        <Input type="file" accept="image/*" onChange={handleFileChange} />
        <p className="text-xs text-muted-foreground">Upload a high-quality cover image.</p>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Design and prototype interfaces..."
          required
          rows={4}
          className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-20 w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-1"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Link</label>
        <Input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://figma.com"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Made By</label>
        <Input
          value={madeBy}
          onChange={(e) => setMadeBy(e.target.value)}
          placeholder="Figma"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Category</label>
        <Select value={category} onValueChange={(value) => setCategory(value ?? "")}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {ToolsCategories.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Tags</label>
        <Input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="design, ui, prototype"
        />
        <p className="text-xs text-muted-foreground">Separate tags with commas.</p>
      </div>

      <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-3">
        <input
          type="checkbox"
          checked={isPublished}
          onChange={(e) => setIsPublished(e.target.checked)}
          className="size-4"
        />
        <div>
          <p className="text-sm font-medium">Published</p>
          <p className="text-xs text-muted-foreground">Show this tool on the public page.</p>
        </div>
      </label>

      <div className="flex justify-end gap-2">
        <Button
          type="submit"
          disabled={
            isPending ||
            isUploading ||
            !title ||
            !slug ||
            !description ||
            !link ||
            !madeBy ||
            !category
          }
        >
          {isUploading ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" /> Uploading Image...
            </>
          ) : isPending ? (
            "Saving..."
          ) : tool ? (
            "Update Tool"
          ) : (
            "Add Tool"
          )}
        </Button>
      </div>
    </form>
  );
}