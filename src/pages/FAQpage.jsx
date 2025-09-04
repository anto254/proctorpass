import React from "react";
import NavBar from "../components/NavBar";
import FAQ from "./FAQ";
import Footer from "../components/Footer";

function FAQpage() {
  return (
    <div className=" bg-secondary bg-opacity-30 min-h-screen pt-[90px]">
      <NavBar />
      <div className="text-gray-400 pt-10 text-center">
        <p>
          <span className="text-3xl">Faq </span> frequently asked questions
        </p>
      </div>
      <div className="min-w-full pt-14 px-2 md:px-[200px]">
        <FAQ
          question="Who are we? "
          answer={[
            <div>
              <p>
                We are a lean team of libertarian individuals who are here to
                help you ace your proctorU &nbsp;
                <strong>
                  
                  (remote proctoring service that enables students to take exams
                  online while being monitored by a live proctor. )&nbsp;
                </strong>
                exams. Our team consists of individuals who have experience
                working in the online exam proctoring industry and possess deep
                knowledge of how the industry operates from an insider's
                perspective.
              </p>
            </div>,
          ]}
        />

        <FAQ
          question="What exactly do we do? "
          answer={[
            <p className="">
              As a <strong> single-service platform</strong>, our focus is on <strong>Proctoru exams.</strong>  Once you agree to our terms and conditions, we link you up with exam experts who will take you through the entire exam. Please note our  service does not involve any kind of bypassing or an “exam helper” situation. We discuss these details once we are able to vet and establish that  you meet our set requirements and standards.
            </p>,
          ]}
        />
        <FAQ
          question="Preorders are made 3 to 4 days in advance, why is this the case?"
          answer={[
            <div>
              <p className="">
                We place a high value on maintaining the confidentiality of our
                services and take calculated steps to ensure this. To ensure
                discretion, we recommend that clients place their orders several
                days in advance of the scheduled test day. <br /> <br /> If a client
                requests to procure our services in less than this stipulated
                timeline, this will only attract extra costs as we may require
                extra effort, resources, or adjustments. Even worse, we may not be in a position to offer the much needed help and the request will be declined. Kindly note that for standardized tests like those administered by ETS or LSAC, pre-orders must be made 10-14 days prior to the actual test date.
              </p>
            </div>,
          ]}
        />
        <FAQ
          question="Do you sell bypasses for Respondus or provide solutions for other proctoring softwares like Examity, Proctorio, Honorlock , etc?"
          answer={[<p className="">No. We don’t sell any bypass solutions. Our distinctive service is <strong>solely</strong> devoted to providing solutions <strong>for ProctorU.</strong></p>]}
        />
        <FAQ
          question="What is our Refunds policy?"
          answer={[<p className="">As a new entrant in this space, our platform has not yet handled any refund cases. However, if such circumstances arise, we have put in place the necessary requirements to process refunds within 5 business days.</p>]}
        />
         <FAQ
          question="Is there a test that you can’t handle?"
          answer={[<p className="">As long as the test is on the ProctorU platform, we’re good to go!</p>]}
        />
        <FAQ
          question="How popular is this service and how frequently have you done it?"
          answer={[<p className="">We have helped dozens of students pass their ProctorU exams, and our Telegram community, which you will join after a simple vetting process, speaks for itself. That being said, we don't boast about numbers but rather focus on the quality of service we provide. We would prefer to maintain a small community of 10 members with a good reputation, rather than one with thousands of members but a poor reputation</p>]}
        />
        
        <FAQ
          question=" Do you provide assistance for ProctorU categories other than Live+ or do you exclusively handle Live+?"
          answer={[<p className=""> We are capable of assisting in all categories offered by ProctorU, which include Live, Live+, Ucard, Auto, and Auto Live Launch.</p>]}
        /><FAQ
          question=" How is the pricing?"
          answer={[<p className="">Standardized exams attract a fee of $2000-$5000 (ETS- GRE, HiSET, PRAXIS  & TOEFL), (LSAC - LSAT) , Other Certification Exams.
          
          <br/> <br/>
          Normal college/university exams (90min, 2hrs , 180 min) Minimum of $1500 <br/>
          We also take requests for NCCCO certification exams and GIAC. Any other requests for   exams done on Proctoru but not listed here are welcome. Prices may vary!!!<br/><br/>
          Note:  <strong className="text-red-500 text-xl"> Payment is strictly upfront!</strong></p>]}
        /><FAQ
          question=" Do you take installments?"
          answer={[<p className="">We don’t take installments. If you have two exams that are a month or two apart, say a  midterm  and a final, you have to pay for both tests upfront.  We may, however, consider discounting the  prices if the tests are several. Also by referring a potential client to us, you may be eligible for a discount on your future exams.</p>]}
        /><FAQ
          question="What forms of payment are accepted?"
          answer={[<p className="">Only Bitcoin payments are accepted at the moment. We are working to provide other forms of payments as not everyone is conversant with Crypto.</p>]}
        /><FAQ
          question="Is there a discount for a repeat customer?"
          answer={[<p className="">  Definitely! <br/><br/>

          <span className="font-bold"> Note:</span> We recognize that as a new service in this field, we may not be able to answer all of your questions. However, in our Telegram group and channel, we have a FAQ document with many frequently asked questions that you may find helpful. Additionally, by browsing the group's earlier posts, you may find that many of your questions have already been addressed. Once you are admitted to the group, please take the time to review the important sections. Cheers!
          <br/><br/>
          <i> We provide more detailed explanations of certain sections of this FAQs section on our Telegram channel.</i></p>]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default FAQpage;
