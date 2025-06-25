
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal = ({ isOpen, onClose }: FormModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-bold">Join DTFS Waitlist</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdzWfp9ds_YE7-8N4HNVQV5cc8ZRpaZJT7UWgdJ5NCbLjotHw/viewform?embedded=true"
            className="w-full h-full border-0"
            title="DTFS Waitlist Form"
          >
            Loading...
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
