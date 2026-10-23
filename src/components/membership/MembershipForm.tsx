import { useState } from "react";

const STORAGE_KEY = "bsl-membership-interest-v1";

/**
 * Collects interest in membership. Nothing is sent to a server yet; the
 * entry is saved on this device only. No payment is requested.
 */
export const MembershipForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!name.trim()) return setError("Please enter your name.");
    if (!emailOk) return setError("Please enter a valid email address.");
    setError(null);
    try {
      const prev = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...prev, { name: name.trim(), email: email.trim(), country: country.trim(), at: new Date().toISOString() }])
      );
    } catch {
      // Storage unavailable; still show confirmation for this session.
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="rounded-xl bg-[#faf7f0] p-4 text-sm" role="status">
        Thank you, {name.trim()}. Your interest is recorded on this device. For more information, use the WhatsApp button above.
      </p>
    );
  }

  const field = "mt-1 w-full rounded-xl border border-[#0b1d3a]/20 bg-white px-3 py-2 text-sm outline-none focus:border-[#c9a227]";

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <div>
        <label htmlFor="m-name" className="text-sm font-semibold">Full name</label>
        <input id="m-name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
      </div>
      <div>
        <label htmlFor="m-email" className="text-sm font-semibold">Email</label>
        <input id="m-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
      </div>
      <div>
        <label htmlFor="m-country" className="text-sm font-semibold">Country (optional)</label>
        <input id="m-country" value={country} onChange={(e) => setCountry(e.target.value)} className={field} />
      </div>
      {error && <p className="text-sm text-red-700" role="alert">{error}</p>}
      <button type="submit" className="rounded-full bg-[#0b1d3a] px-5 py-2.5 text-sm font-semibold text-white">
        Register my interest
      </button>
    </form>
  );
};
