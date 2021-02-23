import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.ProfileContainer}>
      <img src="https://github.com/leandross86.png" alt="Leandro Souza"/>
      <div>
        <strong>Leandro Souza</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}