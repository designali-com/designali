import { relations } from "drizzle-orm";
import { boolean, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
 

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  role: text("role").default("user").notNull(),
  banned: boolean("banned"),
  banReason: text("ban_reason"),
  banExpires: timestamp("ban_expires"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  activeOrganizationId: text("active_organization_id"),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),

  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),

  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),

  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),

  scope: text("scope"),
  password: text("password"),

  // ADD THIS
  issuer: text("issuer"),

  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
});

export const organization = pgTable("organization", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").unique(),
  logo: text("logo"),
  createdAt: timestamp("created_at").notNull(),
  metadata: text("metadata"),
});

export const organizationRelations = relations(organization, ({ many }) => ({
  members: many(member),
}));

export type Organization = typeof organization.$inferSelect;

export const role = pgEnum("role", ["member", "admin", "owner"]);

export type Role = (typeof role.enumValues)[number];

export const member = pgTable("member", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  role: role("role").default("member").notNull(),
  createdAt: timestamp("created_at").notNull(),
});

export const memberRelations = relations(member, ({ one }) => ({
  organization: one(organization, {
    fields: [member.organizationId],
    references: [organization.id],
  }),
  user: one(user, {
    fields: [member.userId],
    references: [user.id],
  }),
}));

export type Member = typeof member.$inferSelect & {
  user: typeof user.$inferSelect;
};

export type User = typeof user.$inferSelect;

export const invitation = pgTable("invitation", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  email: text("email").notNull(),
  role: text("role"),
  status: text("status").default("pending").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  inviterId: text("inviter_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const template = pgTable("template", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  thumbnail: text("thumbnail").notNull(),
  previewUrl: text("preview_url"),
  downloadUrl: text("download_url").notNull(), // S3/Cloudinary/Zip link
  figmaUrl: text("figma_url"),
  category: text("category").notNull(), // e.g., "Dashboard", "Landing Page", "Mobile App"
  isPro: boolean("is_pro").default(true).notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});

// 2. DOWNLOADS TABLE (Konsa user/org kaunsa template download kar raha hai)
export const download = pgTable("download", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  organizationId: text("organization_id").references(() => organization.id, {
    onDelete: "set null",
  }), // Optional: agar team download kar rahi hai
  templateId: text("template_id")
    .notNull()
    .references(() => template.id, { onDelete: "cascade" }),
  licenseKey: text("license_key").notNull(), // Unique license code per download
  downloadedAt: timestamp("downloaded_at")
    .$defaultFn(() => new Date())
    .notNull(),
});

// 3. SUBSCRIPTION TABLE (User ya Organization ka Pro Plan Track karne ke liye)
export const subscriptionStatus = pgEnum("subscription_status", [
  "active",
  "canceled",
  "expired",
]);

export const subscription = pgTable("subscription", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => user.id, { onDelete: "cascade" }),
  organizationId: text("organization_id").references(() => organization.id, {
    onDelete: "cascade",
  }),
  plan: text("plan").notNull(), // e.g., "pro_monthly", "pro_yearly", "team_pro"
  status: subscriptionStatus("status").default("active").notNull(),
  currentPeriodStart: timestamp("current_period_start").notNull(),
  currentPeriodEnd: timestamp("current_period_end").notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
});

// 4. RELATIONS SETUP (Drizzle ORM Queries ke liye)
export const templateRelations = relations(template, ({ many }) => ({
  downloads: many(download),
}));

export const downloadRelations = relations(download, ({ one }) => ({
  user: one(user, {
    fields: [download.userId],
    references: [user.id],
  }),
  organization: one(organization, {
    fields: [download.organizationId],
    references: [organization.id],
  }),
  template: one(template, {
    fields: [download.templateId],
    references: [template.id],
  }),
}));

export const subscriptionRelations = relations(subscription, ({ one }) => ({
  user: one(user, {
    fields: [subscription.userId],
    references: [user.id],
  }),
  organization: one(organization, {
    fields: [subscription.organizationId],
    references: [organization.id],
  }),
}));

// Types Infer Export (Typescript autocomplete ke liye)
export type Template = typeof template.$inferSelect;
export type Download = typeof download.$inferSelect;
export type Subscription = typeof subscription.$inferSelect;

// Updated Export Schema
export const schema = {
  // Existing...
  user,
  session,
  account,
  verification,
  organization,
  member,
  invitation,
  organizationRelations,
  memberRelations,
  // New Additions
  template,
  download,
  subscription,
  templateRelations,
  downloadRelations,
  subscriptionRelations,
};