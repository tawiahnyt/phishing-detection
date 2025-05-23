
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchCheckIcon } from "lucide-react";


const Signup1 = () => {
  return (
    <section className="h-screen bg-muted">
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full max-w-6xl flex-col items-center gap-y-8 rounded-md border border-muted bg-white px-6 py-12 shadow-md">
          <div className="flex flex-col items-center gap-y-2">
            {/* Logo */}
            <div className="flex items-center gap-1 lg:justify-start">
              <h1 className="text-4xl font-bold">Phishing Website Detector</h1>
            </div>
            <p className="font-thin">
              Check if a website is potentially dangerous or attempting to steal
              your information
            </p>
            {/* {heading && <h1 className="text-3xl font-semibold">{heading}</h1>} */}
          </div>
          <div className="flex w-full max-w-3xl flex-col gap-2 border rounded-2xl p-10">
            <h2 className="font-medium text-2xl">URL Analyzer</h2>
            <p>Enter a website URL to check if it's safe to visit</p>
            <div className="flex flex-row  gap-4">
              <div className="flex flex-col gap-2 w-full">
                <Input
                  type="url"
                  placeholder="https://www.example.com"
                  required
                  className="bg-white"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Button type="submit"><SearchCheckIcon /> Analyze</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup1 };
