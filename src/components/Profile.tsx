import styles from '../styles/components/Profile.module.css';


export function Profile(){
    return(
        <div className ={styles.profileContainer} >
            <img src = "https://pbs.twimg.com/profile_images/901875184000487424/Oww6_2tS.jpg" alt="Natan Souza " />
            <div>
            <strong>Natan Souza</strong>
            
            <p>
                <img src = "icons/level.svg" alt="Level"/>
                Level 1 
            </p>
            </div>
        </div>
        
    );
}