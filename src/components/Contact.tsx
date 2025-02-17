'use client'
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

type FormFields = 'name' | 'email' | 'subject' | 'message';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name:string, value:string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters long' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) 
          ? 'Please enter a valid email address' 
          : '';
      case 'subject':
        return value.length < 5 ? 'Subject must be at least 5 characters long' : '';
      case 'message':
        return value.length < 20 ? 'Message must be at least 20 characters long' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field has been touched
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: { [key: string]: string } = {};
    (Object.keys(formData) as Array<keyof typeof formData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    // Update errors state
    setErrors(newErrors);
    
    // If no errors, submit form
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({});
      }, 3000);
    }
  };

  const renderField = (label: string, name: FormFields, component = Input) => {
    const Component = component;
    const props = {
      name,
      value: formData[name],
      onChange: handleChange,
      onBlur: handleBlur,
      className: `w-full p-4 ${errors[name] && touched[name] ? 'border-red-500' : ''}`,
      placeholder: `Your ${name}`,
      ...(component === Textarea && { minRows: 4 })
    };

    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <Component {...props} />
        {errors[name] && touched[name] && (
          <Alert variant="destructive" className="mt-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors[name]}</AlertDescription>
          </Alert>
        )}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white w-full flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your transformation journey? Reach out and let&apos;s discuss 
            how we can work together to achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info Cards - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            {[
              {
                icon: <Mail className="w-5 h-5" />,
                title: "Email",
                content: "hello@lifecoach.com",
                link: "mailto:hello@lifecoach.com"
              },
              {
                icon: <Phone className="w-5 h-5" />,
                title: "Phone",
                content: "+1 (555) 123-4567",
                link: "tel:+15551234567"
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                title: "Location",
                content: "Fairfield, IA",
                link: "#"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderField('Name', 'name')}
                  {renderField('Email', 'email', Input)}
                </div>
                {renderField('Subject', 'subject')}
                {renderField('Message', 'message')}

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;