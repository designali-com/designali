"use client";

import { useActionState, useEffect } from "react";
import { inviteMember } from "./invite";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";

interface InviteMemberFormProps {
  organizationId: string;
  onSuccess?: () => void;
}

const initialState = {
  success: false,
  error: null as string | null,
};

export function InviteMemberForm({ organizationId, onSuccess }: InviteMemberFormProps) {
  const [state, formAction, isPending] = useActionState(inviteMember, initialState);

  useEffect(() => {
    if (state.success && onSuccess) {
      onSuccess();
    }
  }, [state.success, onSuccess]);

  return (
    <form action={formAction} className="space-y-4 pt-2">
      <input type="hidden" name="organizationId" value={organizationId} />

      {/* Email Input */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-zinc-200">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="colleague@company.com"
          required
          className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500"
        />
      </div>

      {/* Role Selection Dropdown */}
      <div className="space-y-2">
        <Label htmlFor="role" className="text-zinc-200">
          Role
        </Label>
        <select
          id="role"
          name="role"
          defaultValue="member"
          className="w-full h-10 px-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600"
        >
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Error Message Display */}
      {state.error && (
        <p className="text-xs text-red-400 bg-red-950/30 border border-red-800/50 p-2 rounded">
          {state.error}
        </p>
      )}

      {/* Success Message Display */}
      {state.success && (
        <p className="text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-800/50 p-2 rounded">
          Invitation sent successfully!
        </p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-medium"
      >
        {isPending ? "Sending Invite..." : "Send Invitation"}
      </Button>
    </form>
  );
}