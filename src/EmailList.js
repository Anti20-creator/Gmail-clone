import { IconButton, Checkbox } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React from 'react'
import './EmailList.css'
import EmailRow from './EmailRow'
import Section from './Section'
import {useState, useEffect} from 'react'
import { db } from './firebase'

function EmailList() {
    
    const [emails, setEmails] = useState([])

    useEffect(() => {
        db.collection('emails')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setEmails(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                )
            })
    }, [])

    return (
        <div className="emailList"> 
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
                <div className="emailList__sections">
                    <Section Icon={Inbox} text='Primary' color='red' selected />
                    <Section Icon={People} text='Social' color='green'/>
                    <Section Icon={LocalOffer} text='Promotions' color='blue' />
                </div>

            <div className="emailList__list">
                {emails.map(({id, data: {to, subject, message, timestamp }}) => {
                    return <EmailRow id={id} key={id} title={to} subject={subject} description={message} time={new Date(timestamp?.seconds * 1000).toUTCString()} />
                })}
                
            </div>
        </div>
    )
}

export default EmailList
