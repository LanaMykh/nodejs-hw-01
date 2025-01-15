import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from "node:fs/promises";

export const writeContacts = async (updatedContacts) => {
    const contacts = await writeFile(PATH_DB,JSON.stringify(updatedContacts, null, 2));
    return contacts;
};
