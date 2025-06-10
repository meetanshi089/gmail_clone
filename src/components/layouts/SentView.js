import React from "react";
import emails from "../../temp/emails.json";

const SentView = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Sent Emails</h2>
      {emails.length === 0 ? (
        <p className="text-gray-500">No sent emails.</p>
      ) : (
        <ul>
          {emails.map((email) => (
            <li
              key={email.id}
              className="border-b border-gray-200 py-3 hover:bg-gray-50 transition"
            >
              <p className="text-sm text-gray-600">
                <strong>To:</strong> {email.to}
              </p>
              <p className="font-medium">{email.subject}</p>
              <p className="text-sm text-gray-700">{email.message}</p>
              <p className="text-xs text-gray-400 mt-1">{email.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SentView;
