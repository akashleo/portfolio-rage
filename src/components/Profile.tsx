import React from "react";
import { MapPin, Circle } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gray-900 rounded-xl border border-gray-800">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">akash ghosh.</h1>
              <p className="text-gray-400">@akashleo_tw</p>
            </div>
            <div className="ml-auto text-right">
              <div className="text-white font-mono font-bold text-lg">আকাশ</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="space-y-3 p-6">
            <p className="text-white text-lg">
              I build{" "}
              <span className="font-semibold text-blue-400">Web Apps</span>.
            </p>

            <p className="text-gray-300">
              Hello, I'm Akash! a 26 year old developer based in Bengaluru - India.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <Circle className="w-2 h-2 fill-green-400 text-green-400" />
              <span className="text-green-400">Available for work</span>
              <span className="text-gray-500 ml-2">
                06/29/2025, 04:59:49 PM
              </span>
            </div>
          </div>

          <div className="rounded-xl flex items-end justify-end">
            <img
              src="../public/happy-guy.png"
              alt="think-explode"
              className="h-auto w-40 object-contain rounded-br-xl"
            />
          </div>
        </div>{" "}
      </div>

      {/* Code Snippet */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-between overflow-hidden">
        <div className="p-4">
          <div className="font-mono text-sm">
            <div className="text-gray-500 mb-1">// How do I center</div>
            <div className="text-blue-400 text-lg">&gt; a div again??</div>
          </div>
        </div>
        <div className="rounded-xl flex items-center justify-center">
          <img
            src="../public/table-flip-2.gif"
            alt="think-explode"
            className="h-auto w-40 object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
