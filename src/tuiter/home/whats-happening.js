import React, {useState} from "react";
import {createTuitThunk}
    from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuitThunk(newTuit));

    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="https://betterpet.com/wp-content/uploads/2022/08/Shih-tzu-funfacts.jpeg" width={60} className="rounded-circle wd-img"/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold override-bs1"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-4">
                        <i className="bi bi-card-image me-3 wd-tuiter-color"></i>
                        <i className="bi bi-filetype-gif me-3 wd-tuiter-color"></i>
                        <i className="bi bi-bar-chart me-3 wd-tuiter-color"></i>
                        <i className="bi bi-emoji-smile me-3 wd-tuiter-color"></i>
                        <i className="bi bi-geo-alt wd-tuiter-color"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;

