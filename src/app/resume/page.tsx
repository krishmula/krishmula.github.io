import { Download, ExternalLink } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-serif font-bold text-xl">Resume</h1>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-highlight/50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Open
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-tertiary/15 text-tertiary hover:bg-tertiary/25 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      </div>

      <div className="rounded-lg border border-muted/40 overflow-hidden bg-highlight/30">
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="w-full"
          style={{ height: '80vh' }}
        >
          {/* Fallback if browser can't render PDF inline */}
          <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
            <p className="text-muted-foreground">
              PDF preview is not available in this browser.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-tertiary/15 text-tertiary hover:bg-tertiary/25 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open PDF
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-highlight/50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  );
}
