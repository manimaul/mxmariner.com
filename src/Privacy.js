import React from "react";
import {Menu, Hero, Footer} from "./App"
import mxmariner_logo_nq8 from './images/mxmariner_logo_nq8.png'

class Privacy extends React.Component {
    render() {
        return (
            <div>
                <Menu/>
                <Hero titleImage={mxmariner_logo_nq8}
                      message={"Marine navigation for Android"}/>
                <div className="container standard_margin">
                    <div className="page-header">
                        <h1>Privacy Policy</h1>
                        <p>
                            We are committed to protecting your privacy and keeping you informed on how your information is collected, protected and used.
                        </p>
                        <p>
                            Please read our Privacy Policy to understand how we use and protect the information you provide to us or obtained from those using our products. By using our products, you accept the collection, retention and use of your personal information in accordance with the terms of this Privacy Policy.
                        </p>
                        <br/>
                        <h4>Data collected and purposes</h4>
                        <p>
                            We collect data to provide you services such as the use of our charts on your device, the purchase of our products/services and to improve your experience with us.
                        </p>
                        <br/>
                        <h2>
                            Data is collected in two forms:
                        </h2>
                        <br/>
                        <h4>DATA PROVIDED BY YOU</h4>
                        <p>
                            We collect your data to provide you with our services, such as the support for the use of our products, the access to our web store, to manage your account, to verify and carry out financial transactions in relation to payments you make online. For these purposes, we may ask for some personal information such as name, email address or phone. Some of this information is required to provide you with the service you have requested, and the failure to provide such information may make it impossible to access that service. Your personal data may also be used, upon your consent, to keep you updated regarding our products and our initiatives, to improve our products and services, to send you promotional and information about our products and services or to carry out market research. Permission for use of this data for such purposes is optional and any refusal will not affect in any way the usage of your mobile apps.   When you use our products we may collect information regarding your position, such as IP or GPS address or other information provided by your plotter or by your mobile device where one of our apps is installed. This information is required for us to provide you our service, such as the indication of the shortest itinerary, the indication of obstacles, the synchronization of your data with other devices. A failure to provide such information may lead to problems in obtaining the requested services. The information regarding your position will be collected only after you authorize the GPS usage at the time of activation request. If you won’t authorize the GPS usage, our App will not have access to the information regarding your position and will not be able to work properly. You will be able at any time to enable or disable the collection of said information through your device's settings. Should you accept, your personal information may be used to enhance or correct our charts, thus enabling a safer navigation. You will be able at any time to deny the processing, even partial, of such data by disabling the collection through your device's settings. The provision of your data for those purposes is optional. Should you deny the consent, you will be able to use our products and we will use the data regarding the geographic position only in an anonymous form that will not consent in any way, even with the combination with the Unique Device Identifier (UDID), MAC address, IMEI or IMSI codes or other customer codes, to directly or indirectly identify you.
                        </p>
                        <br/>
                        <h4>DATA COLLECTED BY US</h4>
                        <p>
                            These data are implicitly transmitted by the use of Internet communication protocols that we collect as you browse the site or by the use of our apps. This information is not collected to be associated with identified parties, but by their very nature may, through processing and association with data held by third parties, allow users to be identified. This category of data includes IP addresses or domain names of computers used by users connecting to the site, the URI (Uniform Resource Identifier) of requested resources, the time of request, the method used to submit the request to the server, the size of the file obtained in reply, the numerical code indicating the status of the reply provided by the server (successful, error, etc.) and other parameters regarding the operating system and computer environment of the user. These data are used only to obtain anonymous statistical information on site and apps use and to check their correct functioning and are deleted immediately after processing. The data may be used to ascertain responsibility in case of hypothetical computer crimes against the site: apart for this possibility, at present data on web contacts do not remain for more than seven days. We could also collect the identifier for advertising of your mobile device (IDFA - Identifier for Advertising - for iOS devices and AAID - Google Advertising ID – for Android devices) in order to allow us to provide you with targeted and pertinent advertisements according to your preferences and interests. By the privacy settings of your mobile device, you will be able to decide at any time to disable such service and/or to set a new advertising ID. In such case, however, you will keep seeing advertisements but they will be less pertinent.
                        </p>
                        <br/>
                        <h4>HOW DO WE PROCESS AND PROTECT OF PERSONAL DATA</h4>
                        <p>
                            The data collected are processed using electronic means for the time strictly needed to achieve the purposes for which such data are collected, except for their transformation into anonymous form that does not allow in any way, nor indirectly through combination with other data, to trace your identity. To prevent the loss of data, their accidental destruction, damaging, unlawful or improper and unauthorized access, specific safety measure are observed, such as TLS / SSL and other protocols in compliance with applicable regulations.
                        </p>
                        <br/>
                        <h4>WHERE DO WE PROCESS YOUR PERSONAL DATA</h4>
                        <p>
                            The databases and servers in which your personal information may be stored are guarded by Google Firebase Analytics and are managed exclusively by the technical staff responsible for processing or by persons appointed to conduct periodic maintenance.
                        </p>
                        <br/>
                        <h4>HOW DO WE DISCLOSE YOUR PERSONAL DATA</h4>
                        <p>
                            Your personal information will not be disclosed to the public and may be provided only for the purposes specified above to the following categories of persons: (i) our employees, (ii) individuals, companies, associations or professionals who have been appointed to carry out on our behalf assistance services and activities and advice related to commercial activity. Such categories acting as controllers or processors, only come into possession of personal data for the performance of their duties and may use and disclose them only in order to perform said services on our behalf or to comply with legal regulations. Controllers or processors that may be designated shall receive adequate operating instructions, with specific reference to the minimum security measures to ensure the confidentiality and security of data.
                        </p>
                        <br/>
                        <h4>PRIVACY POLICY UPDATE</h4>
                        <p>
                            Our Privacy Policy may be changed from time to time to reflect changes in legislation, technology, changes in the collection and use of data, commercial initiatives. In case of changes, we will notify you: (i) by notice published on the main page of the site and/or (ii) taking any other action we may deem appropriate. Any changes will be effective as of the time of publication, and the browsing of the site or the use of our products after such time will be deemed as acceptance.
                        </p>
                        <br/>
                        <p>
                            Updated February 07, 2017.
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Privacy;