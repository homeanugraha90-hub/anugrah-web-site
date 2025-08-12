import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-[#1d1e22] text-white text-center py-8 px-4">
                <p className="text-sm mb-4">
                    Copyright © 2025 <span className="font-semibold">Anugrah Homes</span>
                </p>
                <p className="text-sm mb-6 max-w-4xl mx-auto">
                    This website is not an official website & belongs to authorised channel partner of The Developer. This website is only for information purpose.
                </p>

                <h3 className="text-[#a4c639] text-xl font-semibold mb-2">Privacy Policy</h3>
                <p className="text-sm max-w-4xl mx-auto mb-6">
                    Your personal information (Name, Mobile, Email, City, Query) submitted will not be sold, shared or rented to others. We use this information to send updates about our company and projects and contact you if requested or find it necessary.
                </p>

                <h3 className="text-[#a4c639] text-xl font-semibold mb-2">Webmaster:</h3>
                <p className="text-sm max-w-4xl mx-auto">
                    All images, graphics and statements found on this site are believed to be in the "public domain" if you are the owner of any material used and object to its use on our site, please contact the webmaster and it shall be removed promptly from our servers.
                </p>
            </footer>
    </div>
  )
}
