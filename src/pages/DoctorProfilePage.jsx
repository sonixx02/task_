import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function DoctorProfilePage() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
       
        <Card className="shadow">
          <CardContent>
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Doctor"
                className="w-24 h-24 rounded-full border"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Dr. Neha Sharma</h2>
                <p className="text-sm text-gray-500">Dermatologist</p>
                <p className="text-sm text-gray-500">15+ years of experience</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-gray-600">
                    Followers: <span className="font-semibold">1.2k</span>
                  </span>
                  <span className="text-gray-600">
                    Likes: <span className="font-semibold">3.5k</span>
                  </span>
                  <span className="text-gray-600">
                    Comments: <span className="font-semibold">500</span>
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        
        <Card className="shadow">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
             Dr. Neha Sharma is a highly experienced dermatologist specializing in
              skincare and hair care. With over 15 years of experience, Dr. Neha
              has helped thousands of patients achieve healthier, glowing skin.
            </p>
          </CardContent>
        </Card>

       
        <Card className="shadow">
          <CardHeader>
            <CardTitle>Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Acne and Pimples Treatment</li>
              <li>Hair Fall and Baldness Solutions</li>
              <li>Skin Allergy and Rashes</li>
              <li>Cosmetic Dermatology</li>
            </ul>
          </CardContent>
        </Card>

       
        <Card className="shadow">
          <CardHeader>
            <CardTitle>Specialization</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Trichology</li>
              <li>Cosmetic Procedures</li>
              <li>Laser Treatments</li>
              <li>Botox and Fillers</li>
            </ul>
          </CardContent>
        </Card>

       
        <Card className="shadow">
          <CardHeader>
            <CardTitle>Book an Appointment</CardTitle>
            <CardDescription>Choose your preferred option below</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Video Consultation */}
            <div className="flex items-center justify-between p-4 border rounded-md">
              <div>
                <h4 className="text-lg font-semibold">Video Consultation</h4>
                <p className="text-sm text-gray-500">30 minutes session</p>
              </div>
              <Button>Book Now - ₹1000</Button>
            </div>

           
            <div className="flex items-center justify-between p-4 border rounded-md mt-4">
              <div>
                <h4 className="text-lg font-semibold">Chat Consultation</h4>
                <p className="text-sm text-gray-500">Quick queries resolved</p>
              </div>
              <Button>Book Now - ₹500</Button>
            </div>

           
            <div className="flex items-center justify-between p-4 border rounded-md mt-4">
              <div>
                <h4 className="text-lg font-semibold">In-Person Consultation</h4>
                <p className="text-sm text-gray-500">Clinic visit</p>
              </div>
              <Button>Book Now - ₹1500</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DoctorProfilePage;
