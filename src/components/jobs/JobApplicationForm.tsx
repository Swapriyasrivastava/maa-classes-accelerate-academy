
import React, { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  age: z.string().refine((val) => {
    const num = parseInt(val);
    return !isNaN(num) && num >= 18 && num <= 65;
  }, {
    message: "Age must be between 18 and 65.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  jobPosition: z.string().min(1, {
    message: "Please select a job position.",
  }),
  coverLetter: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const JobApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      email: "",
      phone: "",
      jobPosition: "",
      coverLetter: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your backend
      console.log("Form submitted with values:", values);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success("Application submitted successfully! We will contact you soon.");
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="job-application-form" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Apply for a Position</h2>
        <Card className="max-w-2xl mx-auto p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your age" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="jobPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Applying For</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        {...field}
                      >
                        <option value="">Select position</option>
                        <option value="Mathematics Teacher">Mathematics Teacher</option>
                        <option value="Physics Instructor">Physics Instructor</option>
                        <option value="Administrative Assistant">Administrative Assistant</option>
                        <option value="Other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us why you're interested in this position and what you can bring to our team"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default JobApplicationForm;
