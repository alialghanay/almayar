import { ComplaintFormSchema } from "@/lib/validators/complaint-schema";
import { QualificationFormSchema } from "@/lib/validators/qualifications-schema";
import { TrainingFormSchema } from "@/lib/validators/training-schema";

export interface EmailTemplateData {
  subject: string;
  html: string;
  text: string;
}

export const generateComplaintEmailTemplate = (
  data: ComplaintFormSchema
): EmailTemplateData => {
  const subject = `New Complaint Form Submission - ${data.complaintSubject}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Complaint Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #f4f4f4; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .field-group { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #555; }
        .field-value { margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-radius: 4px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Complaint Form Submission</h1>
        <p>Submitted on ${new Date().toLocaleString()}</p>
      </div>
      
      <div class="content">
        <div class="field-group">
          <div class="field-label">Form Type:</div>
          <div class="field-value">${data.formType}</div>
        </div>
        
        <div class="field-group">
          <div class="field-label">Service Type:</div>
          <div class="field-value">${data.type}</div>
        </div>
        
        <div class="field-group">
          <div class="field-label">First Name:</div>
          <div class="field-value">${data.firstName}</div>
        </div>
        
        <div class="field-group">
          <div class="field-label">Last Name:</div>
          <div class="field-value">${data.lastName}</div>
        </div>
        
        <div class="field-group">
          <div class="field-label">Job Title:</div>
          <div class="field-value">${data.job}</div>
        </div>
        
        <div class="field-group">
          <div class="field-label">Email:</div>
          <div class="field-value">${data.email}</div>
        </div>
        
        <div class="field-group">
          <div class="field-label">Phone:</div>
          <div class="field-value">${data.phone}</div>
        </div>
        
        <div class="field-group">
          <div class="field-label">Complaint Subject:</div>
          <div class="field-value">${data.complaintSubject}</div>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Complaint Form Submission
Submitted on: ${new Date().toLocaleString()}

Form Type: ${data.formType}
Service Type: ${data.type}
First Name: ${data.firstName}
Last Name: ${data.lastName}
Job Title: ${data.job}
Email: ${data.email}
Phone: ${data.phone}
Complaint Subject: ${data.complaintSubject}
  `;

  return { subject, html, text };
};

export const generateQualificationEmailTemplate = (
  data: QualificationFormSchema
): EmailTemplateData => {
  const subject = `New Qualification Request - ${data.organizationInfo.name}`;

  const systemsList = data.systems
    .map((system) => system.replace(/_/g, " "))
    .join(", ");

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Qualification Request Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #f4f4f4; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 18px; font-weight: bold; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px; }
        .field-group { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #555; }
        .field-value { margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-radius: 4px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Qualification Request</h1>
        <p>Submitted on ${new Date().toLocaleString()}</p>
      </div>
      
      <div class="content">
        <div class="section">
          <div class="section-title">Organization Information</div>
          
          <div class="field-group">
            <div class="field-label">Organization Name:</div>
            <div class="field-value">${data.organizationInfo.name}</div>
          </div>
          
          <div class="field-group">
            <div class="field-label">Address:</div>
            <div class="field-value">${data.organizationInfo.address}</div>
          </div>
          
          <div class="field-group">
            <div class="field-label">Phone:</div>
            <div class="field-value">${data.organizationInfo.phone}</div>
          </div>
          
          <div class="field-group">
            <div class="field-label">Email:</div>
            <div class="field-value">${data.organizationInfo.email}</div>
          </div>
          
          ${
            data.organizationInfo.location
              ? `
          <div class="field-group">
            <div class="field-label">Location:</div>
            <div class="field-value">${data.organizationInfo.location}</div>
          </div>
          `
              : ""
          }
        </div>
        
        <div class="section">
          <div class="section-title">Requested Systems</div>
          <div class="field-value">${systemsList}</div>
        </div>
        
        <div class="section">
          <div class="section-title">Employee Information</div>
          
          <div class="field-group">
            <div class="field-label">Management:</div>
            <div class="field-value">${data.employees.management}</div>
          </div>
          
          <div class="field-group">
            <div class="field-label">Quality Department:</div>
            <div class="field-value">${data.employees.qualityDept}</div>
          </div>
          
          <div class="field-group">
            <div class="field-label">Workers:</div>
            <div class="field-value">${data.employees.workers}</div>
          </div>
          
          <div class="field-group">
            <div class="field-label">Other:</div>
            <div class="field-value">${data.employees.other}</div>
          </div>
          
          <div class="field-group">
            <div class="field-label">Number of Branches:</div>
            <div class="field-value">${data.employees.branchesCount}</div>
          </div>
          
          <div class="field-group">
            <div class="field-label">Branch Name:</div>
            <div class="field-value">${data.employees.branchName}</div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">Additional Information</div>
          
          <div class="field-group">
            <div class="field-label">Product/Service Information:</div>
            <div class="field-value">${data.additionalInfo.productInfo}</div>
          </div>
          
          ${
            data.additionalInfo.upload
              ? `
          <div class="field-group">
            <div class="field-label">File Upload:</div>
            <div class="field-value">File attached (see attachment)</div>
          </div>
          `
              : ""
          }
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Qualification Request
Submitted on: ${new Date().toLocaleString()}

ORGANIZATION INFORMATION
Organization Name: ${data.organizationInfo.name}
Address: ${data.organizationInfo.address}
Phone: ${data.organizationInfo.phone}
Email: ${data.organizationInfo.email}
${
  data.organizationInfo.location
    ? `Location: ${data.organizationInfo.location}`
    : ""
}

REQUESTED SYSTEMS
${systemsList}

EMPLOYEE INFORMATION
Management: ${data.employees.management}
Quality Department: ${data.employees.qualityDept}
Workers: ${data.employees.workers}
Other: ${data.employees.other}
Number of Branches: ${data.employees.branchesCount}
Branch Name: ${data.employees.branchName}

ADDITIONAL INFORMATION
Product/Service Information: ${data.additionalInfo.productInfo}
${
  data.additionalInfo.upload
    ? "File Upload: File attached (see attachment)"
    : ""
}
  `;

  return { subject, html, text };
};

export const generateTrainingEmailTemplate = (
  data: TrainingFormSchema
): EmailTemplateData => {
  const subject = `New Training Request - ${data.preparation.organizationName}`;

  const programsList = data.programs
    .map(
      (program, index) => `
    ${index + 1}. ${program.name}
       Preferred Time: ${program.preferredTime}
       Location: ${program.location === "internal" ? "Internal" : "External"}
  `
    )
    .join("");

  const candidatesList = data.candidates
    .map(
      (candidate, index) => `
    ${index + 1}. ${candidate.name}
       Department: ${candidate.department}
       Program: ${candidate.program}
  `
    )
    .join("");

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Training Request Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #f4f4f4; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 18px; font-weight: bold; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px; }
        .field-group { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #555; }
        .field-value { margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-radius: 4px; }
        .item { margin-bottom: 15px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #3498db; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Training Request</h1>
        <p>Submitted on ${new Date().toLocaleString()}</p>
      </div>
      
      <div class="content">
        <div class="section">
          <div class="section-title">Requested Programs</div>
          ${data.programs
            .map(
              (program, index) => `
            <div class="item">
              <div class="field-group">
                <div class="field-label">Program ${index + 1}: ${
                program.name
              }</div>
              </div>
              <div class="field-group">
                <div class="field-label">Preferred Time:</div>
                <div class="field-value">${program.preferredTime}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Location:</div>
                <div class="field-value">${
                  program.location === "internal" ? "Internal" : "External"
                }</div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
        
        <div class="section">
          <div class="section-title">Training Candidates</div>
          ${data.candidates
            .map(
              (candidate, index) => `
            <div class="item">
              <div class="field-group">
                <div class="field-label">Candidate ${index + 1}: ${
                candidate.name
              }</div>
              </div>
              <div class="field-group">
                <div class="field-label">Department:</div>
                <div class="field-value">${candidate.department}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Program:</div>
                <div class="field-value">${candidate.program}</div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
        
        <div class="section">
          <div class="section-title">Organization Details</div>
          
          <div class="field-group">
            <div class="field-label">Organization Name:</div>
            <div class="field-value">${data.preparation.organizationName}</div>
          </div>
          
          ${
            data.preparation.notes
              ? `
          <div class="field-group">
            <div class="field-label">Notes:</div>
            <div class="field-value">${data.preparation.notes}</div>
          </div>
          `
              : ""
          }
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Training Request
Submitted on: ${new Date().toLocaleString()}

REQUESTED PROGRAMS
${programsList}

TRAINING CANDIDATES
${candidatesList}

ORGANIZATION DETAILS
Organization Name: ${data.preparation.organizationName}
${data.preparation.notes ? `Notes: ${data.preparation.notes}` : ""}
  `;

  return { subject, html, text };
};
