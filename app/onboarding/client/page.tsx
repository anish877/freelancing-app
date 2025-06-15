"use client"

import CompanyDetailsComponent from '@/components/onboarding/client/CompanyInfo';
import PersonalInfoComponent from '@/components/onboarding/client/PersonalInfo';
import { useState } from 'react';


function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const stepTitles = ['Personal Info', 'Company Details', 'Preferences', 'Review', 'Complete'];

  return (
    <div className="h-[calc(100vh-2rem)] bg-gray-50 p-4">
      <div className="h-full w-full overflow-hidden">
        <div className="h-full flex gap-6">
          {/* Main Content Area - Left Side */}
          <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
            {/* Content Header */}
            <div className="p-8 pb-4 flex-shrink-0">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Step {currentStep} of {totalSteps}
              </h1>
              <h2 className="text-lg text-gray-600">
                {stepTitles[currentStep - 1]}
              </h2>
            </div>
            
            {/* Main Content Area - Scrollable */}
            <div className="flex-1 px-8 pb-8 overflow-hidden">
              {/* <PersonalInfoComponent/> */}
              <CompanyDetailsComponent/>
            </div>
          </div>

          {/* Progress Sidebar - Right Side */}
          <div className="w-80 bg-white rounded-lg shadow-sm p-6 flex flex-col">
            {/* Progress Header */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Onboarding Progress
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {currentStep} of {totalSteps} steps completed
              </p>
            </div>

            {/* Step List */}
            <div className="flex-1">
              <div className="space-y-4">
                {stepTitles.map((title, index) => {
                  const stepNumber = index + 1;
                  const isCompleted = stepNumber < currentStep;
                  const isCurrent = stepNumber === currentStep;
                  
                  return (
                    <div 
                      key={stepNumber}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors cursor-pointer ${
                        isCurrent 
                          ? 'bg-blue-50 border-l-4 border-blue-600' 
                          : isCompleted 
                            ? 'bg-green-50' 
                            : 'bg-gray-50'
                      }`}
                      onClick={() => setCurrentStep(stepNumber)}
                    >
                      <div 
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          isCompleted
                            ? 'bg-green-600 text-white'
                            : isCurrent
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-300 text-gray-600'
                        }`}
                      >
                        {isCompleted ? '✓' : stepNumber}
                      </div>
                      <div className="flex-1">
                        <p 
                          className={`text-sm font-medium ${
                            isCurrent 
                              ? 'text-blue-900' 
                              : isCompleted 
                                ? 'text-green-900' 
                                : 'text-gray-600'
                          }`}
                        >
                          {title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {isCompleted ? 'Completed' : isCurrent ? 'In Progress' : 'Pending'}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Need Help?
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                Our support team is here to assist you through the onboarding process.
              </p>
              <button className="w-full text-xs bg-gray-600 text-white py-2 px-3 rounded-md hover:bg-gray-700 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage;