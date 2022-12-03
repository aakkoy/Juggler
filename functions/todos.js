/* 
     Return A List of All the TO DO ITEMS

*/
/* 
export async function handler (event, content){

    return {
        statusCode:200,
        body: JSON.stringify({path:"/api/todos"})
    }
}
 */

import path from 'path'
import fs from 'fs/promises'

export async function handler (event, context){
    const filePath = path.resolve('./db/todos.json')
    //  stream buffer
    const data = await fs.readFile(filePath, "utf-8")
    
    return {
        statusCode: 200,
        body: data
    }
}