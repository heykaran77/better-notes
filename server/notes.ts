"use server";

import { db } from "@/db";
import { insertNoteSchema, notes, NotesInsert } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createNote = async (values: NotesInsert) => {
  const result = insertNoteSchema.safeParse(values);

  if (!result.success) {
    return { success: false, message: result.error.issues[0].message };
  }

  try {
    await db.insert(notes).values(values);
    return { success: true, message: "Note created successfully" };
  } catch (error) {
    const e = error as Error;
    return { success: false, message: e.message || "Failed to create note" };
  }
};

export const getNotesById = async (id: string) => {
  try {
    const note = await db.query.notes.findFirst({
      where: eq(notes.id, id),
      with: {
        notesbook: true,
      },
    });
    return { success: true, note };
  } catch (error) {
    const e = error as Error;
    return { success: false, message: e.message || "Failed to get note" };
  }
};

export const updateNote = async (id: string, values: Partial<NotesInsert>) => {
  // Parse the results with partial schema
  const result = insertNoteSchema.partial().safeParse(values);

  if (!result.success) {
    return { success: false, message: result.error.issues[0].message };
  }

  try {
    await db.update(notes).set(values).where(eq(notes.id, id));
    return { success: true, message: "Note updated successfully" };
  } catch (error) {
    const e = error as Error;
    return { success: false, message: e.message || "Failed to update note" };
  }
};

export const deleteNote = async (id: string) => {
  try {
    await db.delete(notes).where(eq(notes.id, id));
    return { success: true, message: "Note deleted successfully" };
  } catch (error) {
    const e = error as Error;
    return { success: false, message: e.message || "Failed to delete note" };
  }
};
