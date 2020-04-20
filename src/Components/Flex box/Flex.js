import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import './Flex.css'
import { FaUserCircle } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
// import { IoIosSend } from 'react-icons/io';


class Flex extends React.Component {
    render() {
        return (
            <div style={{ width: '100%' }}>
                <div className="header">
                    <div className="button">
                        <Button variant="contained" href="#contained-buttons" className="join">
                            Join Board
                        </Button>
                        <Button variant="contained" href="#contained-buttons">
                            Start New Topic
                       </Button>
                    </div>
                    <div className="Nav">
                        <FaUserCircle />  Name  <AiFillSetting />
                    </div>
                </div>

                <Box display="flex" flexDirection="row" p={1} m={1}>
                    <Box className="boxes B1 scrollbar force-overflow" p={1} bgcolor="rgb(213, 238, 227)">
                        <p className="Head"> Discussion topic</p>
                        <table className="Discussion">
                            <tr>
                                <th>
                                    User : Message
                                    </th>
                            </tr>
                            <tr>
                                <td>
                                    User : Message
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    Kareem : Message
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    Adeel : Message
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    Faisal: Message
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    Rehan : Message
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    Sender :
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                            </tr>
                        </table>
                        <div className="msg_type">
                            <input className="type" type="text" placeholder="Type here" />
                        </div>
                        <button className="enter">Enter</button>
                        <br />
                        <button className="board">Board 1</button>
                        <button>+</button>
                    </Box>

                    <Box className="boxes B2 scrollbar force-overflow" p={1} bgcolor="rgb(213, 238, 227)">
                        <p className="Head">Users Active</p>
                        <table>
                            <tr>
                                <th>
                                    Sender
                                </th>
                            </tr>
                            <tr>
                                <td>
                                <img src="https://ptetutorials.com/images/user-profile.png" alt="Hyder" />
                                    Hyder
                                 </td>
                            </tr>
                            <tr>
                                <td>
                                <img src="https://ptetutorials.com/images/user-profile.png" alt="Faisal" />
                                    Faisal
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <img src="https://ptetutorials.com/images/user-profile.png" alt="Rehan" />
                                    Rehan
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <img src="https://ptetutorials.com/images/user-profile.png" alt="Kareem" />
                                    Kareem
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <img src="https://ptetutorials.com/images/user-profile.png" alt="Adeel" />
                                    Adeel
                                </td>
                            </tr>
                        </table>
                    </Box>

                    <Box className="boxes B3 scrollbar force-overflow" p={1} bgcolor="rgb(213, 238, 227)">
                        <p className="Head">Message List</p>
                        <div className="mesgs">
                            <div className="incoming_msg">
                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>Test which is a new approach to have all
                                             solutions</p>
                                        <span className="time_date"> 11:01 AM    |    June 9</span></div>
                                </div>
                            </div>
                            <div className="outgoing_msg">
                                <div className="sent_msg">
                                    <p>Test which is a new approach to have all
                                        solutions</p>
                                    <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                            </div>
                            <div className="incoming_msg">
                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>Test, which is a new approach to have</p>
                                        <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                                </div>
                            </div>
                            <div className="outgoing_msg">
                                <div className="sent_msg">
                                    <p>Apollo University, Delhi, India Test</p>
                                    <span className="time_date"> 11:01 AM    |    Today</span> </div>
                            </div>
                            <div className="incoming_msg">
                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>We work directly with our designers and suppliers,
                                        and sell direct to you, which means quality, exclusive
                                             products, at a price anyone can afford.</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                            <div className="type_msg">
                                <div className="input_msg_write">
                                    <input type="text" className="write_msg" placeholder="Type a message" />
                                    <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Box>

            </div >
        );
    }
}

export default Flex;
