import { create } from "zustand";

 export const useActiveFileStore=create((set)=>{
    return {
        activeFileTab:null,
        setActiveFileTab:(path,value,extension)=>{
            set({
                activeFileTab:{
                    path:path,
                    value:value,
                    extension:extension
                }
            })
        }
    }
 })