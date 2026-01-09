"use server";

// Server functions for Notebooks, Notes.

import { db } from "@/db";
import { NotebooksInsert, notesbooks } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

export const createNotebook = async (values: NotebooksInsert) => {
  try {
    await db.insert(notesbooks).values(values);
    return { success: true, message: "Notebook created successfully" };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "Failed to create notebook",
    };
  }
};

export const getNotebooks = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const userId = session?.user.id;

    if (!userId) {
      return { success: false, message: "User not found" };
    }
    const notebooksByUser = await db
      .select()
      .from(notesbooks)
      .where(eq(notesbooks.userId, userId));
    return { success: true, notebooks: notebooksByUser };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "Failed to get notebooks",
    };
  }
};

export const getNotebookById = async (id: string) => {
  try {
    const notebook = await db
      .select()
      .from(notesbooks)
      .where(eq(notesbooks.id, id));
    return { success: true, notebook };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "Failed to get notebook",
    };
  }
};

export const updateNotebook = async (id: string, values: NotebooksInsert) => {
  try {
    await db.update(notesbooks).set(values).where(eq(notesbooks.id, id));
    return { success: true, message: "Notebook updated successfully" };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "Failed to update notebook",
    };
  }
};

export const deleteNotebook = async (id: string) => {
  try {
    await db.delete(notesbooks).where(eq(notesbooks.id, id));
    return { success: true, message: "Notebook deleted successfully" };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "Failed to delete notebook",
    };
  }
};
