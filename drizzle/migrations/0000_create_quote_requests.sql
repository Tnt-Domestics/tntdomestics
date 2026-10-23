CREATE TABLE public.quote_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 30),
 email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
 service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 100),
 location text NOT NULL CHECK (char_length(location) BETWEEN 1 AND 250),
 details text NOT NULL CHECK (char_length(details) BETWEEN 10 AND 4000),
 submission_key uuid NOT NULL UNIQUE,
 ip_hash text NOT NULL
);
GRANT ALL ON public.quote_requests TO service_role;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
CREATE INDEX quote_requests_rate_limit ON public.quote_requests (ip_hash, created_at);
COMMENT ON TABLE public.quote_requests IS 'Private quote leads; only the validated server-side intake function may insert. No visitor read access.';