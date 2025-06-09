"pages/api/readContacts.ts"
import fs from "fs"
import { NextApiRequest, NextApiResponse } from "next"
import { contactsProps } from "@/models/contactProps"
import path from "path"

export default function readContacts(req: NextApiRequest, res:NextApiResponse<contactsProps[]>){
    
    const filePath = path.join(process.cwd(),'src','models', 'contacts.json');
    const jsonString:string = fs.readFileSync(filePath).toString();
    const contactsDict:contactsProps[] = JSON.parse(jsonString); 

    res.status(200).json(contactsDict);
}