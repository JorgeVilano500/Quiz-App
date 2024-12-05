import { createClient } from "@supabase/supabase-js";
const apiURL = "https://vzcllffexqjuhpsvbmtw.supabase.co";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6Y2xsZmZleHFqdWhwc3ZibXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMTUyNjcsImV4cCI6MjAzNzg5MTI2N30.qBJD8-lbXfZhZX3pxhI2lPgAkdL9oZ8mzJNX8LwGYrA";
createClient(apiURL, anonKey);
