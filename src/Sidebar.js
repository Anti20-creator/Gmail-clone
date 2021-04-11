import React from 'react'
import './Sidebar.css'
import {Button, IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import SidebarOption from './SidebarOption'
import StarIcon from '@material-ui/icons/Star'
import { Duo, ExpandMore, LabelImportant, NearMe, Note, Person, Phone } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'

function Sidebar() {

    const dispatch = useDispatch()

    return (
        <div className="sidebar">
            <Button onClick={() => dispatch(openSendMessage())} className="sidebar__compose" startIcon={<AddIcon fontSize="large" />}>Compose</Button>     
            
            <SidebarOption Icon={InboxIcon} title="Inbox" number={60} selected />
            <SidebarOption Icon={StarIcon} title="Starred" number={22} />
            <SidebarOption Icon={LabelImportant} title="Important" number={12} />
            <SidebarOption Icon={NearMe} title="Sent" number={16} />
            <SidebarOption Icon={Note} title="Drafts" number={30} />
            <SidebarOption Icon={ExpandMore} title="More" number={44} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
