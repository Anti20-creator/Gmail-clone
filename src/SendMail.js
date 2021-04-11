import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import './SendMail.css'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { closeSendMessage } from './features/mailSlice'
import { db } from './firebase'
import firebase from 'firebase'

function SendMail() {

    const dispatch = useDispatch()

    const {register, handleSubmit, watch, errors} = useForm()

    const onSubmit = (formData) => {
        console.log(formData)
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        dispatch(closeSendMessage())
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="To" type="text" name="to" ref={register({required: true})} key="1" />
                {errors.to && <p className="sendMail_error">To is required!</p> }
                <input placeholder="Subject" type="text" name="subject" ref={register({required: true})} key="2" />
                {errors.subject && <p className="sendMail_error">Subject is required!</p> }
                <input placeholder="Message..." type="text" className="sendMail__message" name="message" ref={register({required: true})} key="3"/>
                {errors.message && <p className="sendMail_error">Message is required!</p> }

                <div className="sendMail__options">
                    <Button type="submit" className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
