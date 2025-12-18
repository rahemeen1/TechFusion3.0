# EmailJS Setup Guide for TechFusion 3.0

To enable email functionality on the Contact page, follow these steps:

## 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email
5. Note down your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message

4. Template example:
   ```
   Subject: New Contact Form Submission - {{subject}}
   
   From: {{name}}
   Email: {{email}}
   
   Message:
   {{message}}
   ```

5. Set the **To Email** to: `techfusion@kinnaird.edu.pk`
6. Note down your **Template ID** (e.g., `template_xyz789`)

## 4. Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `abcdef123456`)

## 5. Update Contact.jsx

Open `src/pages/Contact.jsx` and replace these lines (around line 52-54):

```javascript
const serviceID = 'service_eys2ngr' // Replace with your EmailJS service ID
const templateID = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
```

With your actual values:

```javascript
const serviceID = 'service_abc123' // Your actual service ID
const templateID = 'template_xyz789' // Your actual template ID
const publicKey = 'abcdef123456' // Your actual public key
```

## 6. Test the Form

1. Save the file
2. Go to the Contact page on your website
3. Fill out the form with test data
4. Click "Send Message"
5. Check your inbox at techfusion@kinnaird.edu.pk

## Troubleshooting

- If emails aren't sending, check your EmailJS dashboard for error logs
- Make sure your email service is properly connected
- Verify that the template variables match the form field names
- Check that you've replaced all placeholder IDs with your actual IDs

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

This should be sufficient for the contact form. If you need more, consider upgrading or using a backend solution.
