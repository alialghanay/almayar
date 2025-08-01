# Email Functionality Implementation

This document describes the complete email functionality implementation for the Al Mayar website forms using Nodemailer.

## Overview

The email system handles form submissions from three types of forms:
- Complaint Form
- Qualification Request Form  
- Training Needs Form

## Architecture

### Core Components

1. **Email Configuration** (`src/lib/email/config.ts`)
   - Nodemailer transporter setup
   - Environment variable validation
   - Connection testing utilities

2. **Email Templates** (`src/lib/email/templates.ts`)
   - HTML and text email templates for each form type
   - Professional styling with responsive design
   - Dynamic data injection

3. **Email Service** (`src/lib/email/service.ts`)
   - Main service class for sending emails
   - Form-specific email methods
   - Confirmation email functionality
   - Error handling and logging

4. **Rate Limiting** (`src/lib/utils/rate-limiter.ts`)
   - Prevents spam and abuse
   - IP-based rate limiting
   - Configurable limits per time window

5. **API Routes** (`src/app/api/forms/*/route.ts`)
   - RESTful endpoints for form submissions
   - Input validation using Zod schemas
   - Rate limiting enforcement
   - Proper error responses

6. **React Hook** (`src/hooks/use-form-submission.ts`)
   - Custom hook for form submissions
   - Loading states management
   - Error handling
   - Type-safe form data

## Environment Configuration

Create a `.env.local` file with the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com

# Contact Email (where form submissions will be sent)
CONTACT_EMAIL=info@almayar.ly
```

### Gmail Setup Instructions

1. Enable 2-factor authentication on your Google account
2. Generate an app-specific password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and generate password
   - Use this password in `SMTP_PASS`

### Other Email Providers

- **Outlook**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **Custom SMTP**: Use your provider's settings

## API Endpoints

### Form Submission Endpoints

- `POST /api/forms/complaint` - Submit complaint form
- `POST /api/forms/qualification` - Submit qualification request
- `POST /api/forms/training` - Submit training needs form

### Health Check

- `GET /api/health/email` - Test email configuration

### Request/Response Format

#### Request Example (Complaint Form)
```json
{
  "formType": "Complaint Form",
  "type": "consultation",
  "firstName": "Ahmed",
  "lastName": "Mohamed",
  "job": "Quality Manager",
  "email": "ahmed@example.com",
  "phone": "+218912345678",
  "complaintSubject": "Issue description..."
}
```

#### Success Response
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "data": {
    "messageId": "email-message-id",
    "confirmationSent": true
  }
}
```

#### Error Response
```json
{
  "success": false,
  "error": "Validation failed",
  "message": "Please check your form data",
  "details": [
    {
      "field": "email",
      "message": "Invalid email address"
    }
  ]
}
```

## Security Features

### Rate Limiting
- 5 form submissions per 15 minutes per IP address
- Automatic IP detection from headers
- Configurable limits and time windows

### Input Validation
- Zod schema validation for all form data
- Type-safe data processing
- Sanitized error messages

### Email Security
- TLS encryption for SMTP connections
- Unique request IDs for tracking
- Proper error handling without exposing sensitive data

## Usage in React Components

### Using the Custom Hook

```typescript
import { useComplaintFormSubmission } from '@/hooks/use-form-submission';

const MyForm = () => {
  const { isSubmitting, submitForm } = useComplaintFormSubmission();
  
  const handleSubmit = async (data: ComplaintFormSchema) => {
    const result = await submitForm(data);
    
    if (result.success) {
      // Handle success
      console.log('Form submitted successfully');
    } else {
      // Handle error
      console.error('Submission failed:', result.message);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
```

## Email Templates

### Features
- Responsive HTML design
- Professional styling
- Both HTML and plain text versions
- Dynamic content injection
- Consistent branding

### Template Structure
- Header with title and submission timestamp
- Organized sections for different data types
- Proper formatting for lists and complex data
- Footer with company information

## Testing

### Email Tester Utility

Use the built-in testing utility to verify email functionality:

```typescript
import { emailTester } from '@/lib/email/test';

// Test individual components
await emailTester.testEmailConfiguration();
await emailTester.testComplaintFormEmail();

// Run all tests
const results = await emailTester.runAllTests();
console.log(results);
```

### Manual Testing

1. Test email configuration:
   ```bash
   curl http://localhost:3000/api/health/email
   ```

2. Test form submission:
   ```bash
   curl -X POST http://localhost:3000/api/forms/complaint \
     -H "Content-Type: application/json" \
     -d '{"formType":"Complaint Form","type":"consultation","firstName":"Test","lastName":"User","job":"Tester","email":"test@example.com","phone":"123456789","complaintSubject":"Test complaint"}'
   ```

## Error Handling

### Common Issues and Solutions

1. **SMTP Authentication Failed**
   - Verify email credentials
   - Check if 2FA is enabled and app password is used
   - Ensure SMTP settings are correct

2. **Rate Limit Exceeded**
   - Wait for the rate limit window to reset
   - Check if IP is correctly detected
   - Adjust rate limits if needed

3. **Email Delivery Failed**
   - Check email provider settings
   - Verify recipient email addresses
   - Check spam folders

4. **Form Validation Errors**
   - Ensure form data matches Zod schemas
   - Check required fields are populated
   - Verify data types are correct

## Deployment Considerations

### Environment Variables
- Never commit `.env.local` to version control
- Use your hosting platform's environment variable system
- Validate all required environment variables on startup

### Email Provider Limits
- Gmail: 500 emails per day for free accounts
- Consider using professional email services for production
- Monitor email delivery rates and bounces

### Monitoring
- Log all email attempts and results
- Monitor rate limiting effectiveness
- Set up alerts for email delivery failures

## Customization

### Adding New Form Types

1. Create Zod validation schema
2. Add email template function
3. Create API route
4. Add service method
5. Create React hook
6. Update form component

### Modifying Email Templates

Edit template functions in `src/lib/email/templates.ts`:
- Update HTML structure and styling
- Add new data fields
- Customize branding and content

### Adjusting Rate Limits

Modify limits in `src/lib/utils/rate-limiter.ts`:
- Change request limits
- Adjust time windows
- Add different limits for different endpoints

## Best Practices

1. **Security**
   - Always validate input data
   - Use environment variables for sensitive data
   - Implement proper rate limiting
   - Log security-related events

2. **Performance**
   - Use background processing for email sending
   - Implement email queuing for high volume
   - Cache email templates when possible

3. **Reliability**
   - Handle email provider outages gracefully
   - Implement retry mechanisms
   - Provide fallback contact methods

4. **User Experience**
   - Provide clear success/error messages
   - Send confirmation emails to users
   - Keep forms responsive during submission

## Support

For technical support or questions about the email functionality:
- Check the error logs for detailed error messages
- Use the testing utilities to diagnose issues
- Review environment variable configuration
- Consult the API documentation for proper usage
