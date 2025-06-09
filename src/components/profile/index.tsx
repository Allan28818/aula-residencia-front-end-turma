import { useState } from "react"
import styles from "./profile.module.css"
import { url } from "inspector";
import { RiPencilFill } from "react-icons/ri";
import { BsXLg } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
import { FaUserNinja } from "react-icons/fa";

interface profileButtonProps{
    
    onClick: () => void;
}

function ProfileImage(){

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [withoutImage, setWithoutImage] = useState<boolean>(false)

    function removeImage(){
        
        if(isEditing && !withoutImage) setWithoutImage(true);
        if(!isEditing && withoutImage) setWithoutImage(false);
        
        setIsEditing(!isEditing);
    }

    function addImage(){
        setWithoutImage(false);
        setIsEditing(false);    
    }

    return (
    <div className={styles.div} 
    style={{
        justifyContent: isEditing? "space-between" : "end",
        backgroundImage: withoutImage? "url('/assets/withoutImage.svg')" : "url('/assets/profileKakashi.svg')"
    }
    }>
        <button className={styles.button} 
        style={
            {display: isEditing? 'flex' : 'none'}
            }
        onClick={addImage}
            >
            <IoCheckmark style={{width: "58%", height: "58%"}}  />
        </button>

       <button className={styles.button} onClick={removeImage}>
        {
            isEditing? <BsXLg style={{width: "58%", height: "58%"}} /> : <RiPencilFill style={{width: "58%", height: "58%"}}/>
        }
       </button>
    </div>
    ) 
}

export { ProfileImage }