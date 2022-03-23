import React, {Component} from 'react';
import Navigation from "./navigation";
import {Button, Input, Page, Spacer, Textarea, Text} from "@geist-ui/core";

export default class ContactUs extends Component{
    constructor({props}: { props: any }) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    }
    nameHandler = (e: { target: { value: string; }; }) => {
        this.setState({ name: e.target.value });
    }

    emailHandler = (e: { target: { value: string; }; }) => {
        this.setState({ email: e.target.value });
    }
    subjectHandler = (e: { target: { value: string; }; }) => {
        this.setState({ subject: e.target.value });
    }

    messageHandler = (e: { target: { value: string; }; }) => {
        this.setState({ message: e.target.value });
    }
    submitHandler = () => {
        const config = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                // @ts-ignore
                name: this.state.name,
                // @ts-ignore
                email: this.state.email,
                // @ts-ignore
                subject: this.state.subject,
                // @ts-ignore
                message: this.state.message
            })
        }
        const promise = fetch("http://localhost:8000/messages", config);
        const promise1 = promise.then((Response) => {
            return Response.json();
        });
        promise1.then(user => {
            console.log(user);
        })
        alert("Message sent, Thank you! We will get back to you ASAP");
    }
    render() {
        // @ts-ignore
        const { name, email, subject, message } = this.state;
        return (
            <div>
                <Navigation activePage={"contact"}/>
                <Page>
                    <Page.Content>
                        <Text h1>Contact Us</Text>
                        <Input
                            placeholder="Your Name"
                            scale={4 / 3}
                            width="60%"
                            value={name}
                            onChange={this.nameHandler} />
                        <Spacer h={.5} />
                        <Input
                            placeholder="Your Email"
                            scale={4 / 3}
                            width="60%"
                            htmlType={"email"}
                            value={email}
                            onChange={this.emailHandler} />
                        <Spacer h={.5} />
                        <Input
                            placeholder="Subject"
                            scale={4 / 3}
                            width="60%"
                            value={subject}
                            onChange={this.subjectHandler} />
                        <Spacer h={.5} />
                        <Textarea
                            placeholder="Your Message"
                            scale={4 / 3}
                            width="36%"
                            value={message}
                            onChange={this.messageHandler} />
                        <Spacer h={.5} />
                        <Button onClick={this.submitHandler}>Submit</Button>
                        <Spacer h={.5} />
                    </Page.Content>
                </Page>
            </div>
        );
    }


}





