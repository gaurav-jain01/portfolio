import { useEffect, useRef } from 'react';
import { ArrowUpRight, Download, FileText, X } from 'lucide-react';
import { useMotionPreferences } from './motion';

const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

export default function ResumeModal({ onClose }) {
  const dialogRef = useRef(null);
  const { reduced } = useMotionPreferences();

  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    dialog.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (opener instanceof HTMLElement && opener.isConnected) {
        opener.focus({ preventScroll: true });
      }
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={`resume-dialog${reduced ? ' resume-dialog-static' : ''}`}
      aria-labelledby="resume-title"
      aria-describedby="resume-description"
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
    >
      <div className="resume-modal-surface">
        <div className="resume-modal-header">
          <div className="resume-modal-heading">
            <span className="resume-file-icon" aria-hidden="true"><FileText size={23} /></span>
            <div><h2 id="resume-title">Gaurav Jain’s resume</h2><p id="resume-description">Full-Stack Developer · PDF</p></div>
          </div>
          <button type="button" className="icon-button resume-close" onClick={onClose} aria-label="Close resume preview"><X size={21} /></button>
        </div>
        <div className="resume-preview">
          <iframe title="Gaurav Jain resume PDF" src={`${resumeUrl}#view=FitH&toolbar=0&navpanes=0`} />
        </div>
        <div className="resume-modal-footer">
          <a className="text-link resume-open-file" href={resumeUrl} target="_blank" rel="noreferrer">Open PDF in a new tab <ArrowUpRight size={15} /></a>
          <a className="button button-primary resume-download" href={resumeUrl} download="Gaurav_Jain.pdf"><Download size={17} />Download PDF</a>
        </div>
      </div>
    </dialog>
  );
}
