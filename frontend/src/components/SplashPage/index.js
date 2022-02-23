import StartExpeditionModal from "../StartExpeditionModal"
import AlreadyCrewmateModal from "../AlreadyCrewmateModal"

import './SplashPage.css'

const SplashPage = ({ user }) => {
    return(
        <div className='splash-content'>
            <div id='user'>User: {user}</div>
            <h1 className='splash-text'>Hey there, space cadet.</h1>
            <div className='bottom'>
                <p className='splash-p'>Keep your logs organized with Aethernote.</p>
                {!user && <div>
                    <StartExpeditionModal />
                    <AlreadyCrewmateModal />
                </div>}
            </div>
        </div>
    )
}

export default SplashPage
