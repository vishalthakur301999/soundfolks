import { Page } from '@geist-ui/core';
import React from 'react';
import Navigation from "./navigation";

function AboutPage() {
    return (
        <div>
            <Navigation activePage={"about"}/>
            <Page>
                <Page.Content>
                    <h1>Hello, Everyone.</h1>
                    <p>
                        SoundFolks is an independent online publication that is a voice for the world of consumer audio users across the world.<br/><br/>

                        Our mission at SoundFolks is clear: to help customers make the right buying decision. We do this using our extensive knowledge of consumer technology and our team is comprised of seasoned technology journalists, device reviewers, and video producers.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>
                        Training Project by Vishal Thakur
                    </h3>
                </Page.Content>
            </Page>
        </div>
    );
}

export default AboutPage;
