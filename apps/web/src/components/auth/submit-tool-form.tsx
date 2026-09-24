"use client"

import { useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

interface SubmitToolFormProps {
  onSuccess?: () => void
}

export default function SubmitToolForm({
  onSuccess,
}: SubmitToolFormProps) {
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const [formData, setFormData] = useState({
    title: "",
    email: "",
    description: "",
    link: "",
    madeBy: "",
    category: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage("")

    try {
      const res = await fetch("/api/tools/submit-tool", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setSuccessMessage("Tool submitted successfully! Email sent.")

      setFormData({
        title: "",
        email: "",
        description: "",
        link: "",
        madeBy: "",
        category: "",
      })

      // Close dialog after 1.5 seconds
      setTimeout(() => {
        onSuccess?.()
      }, 1500)
    } catch (error) {
      alert(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-2">
      <div className="space-y-1.5">
        <Label htmlFor="tool-title">Tool Title</Label>
        <Input
          id="tool-title"
          type="text"
          required
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
          placeholder="e.g. Designali UI"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="tool-email">Your Email</Label>
          <Input
            id="tool-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="tool-made-by">Made By</Label>
          <Input
            id="tool-made-by"
            type="text"
            required
            value={formData.madeBy}
            onChange={(e) =>
              setFormData({
                ...formData,
                madeBy: e.target.value,
              })
            }
            placeholder="e.g. Ali"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="tool-category">Category</Label>
          <Input
            id="tool-category"
            type="text"
            required
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
            placeholder="e.g. Components"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="tool-link">Link</Label>
          <Input
            id="tool-link"
            type="url"
            required
            value={formData.link}
            onChange={(e) =>
              setFormData({
                ...formData,
                link: e.target.value,
              })
            }
            placeholder="https://tool.com"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="tool-description">Description</Label>
        <Textarea
          id="tool-description"
          required
          rows={3}
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
          placeholder="Briefly describe what your tool does..."
          className="resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading ? "Submitting..." : "Submit Tool"}
      </Button>

      {successMessage && (
        <p className="text-center text-xs font-medium text-green-600">
          {successMessage}
        </p>
      )}
    </form>
  )
}