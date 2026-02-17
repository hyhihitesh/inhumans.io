-- Ensure authenticated clients can use app schema types/functions in RLS paths.

grant usage on schema app to authenticated;
grant usage on schema app to anon;
grant usage on schema app to service_role;

grant execute on function app.is_firm_member(uuid) to authenticated, anon, service_role;
grant execute on function app.is_firm_owner(uuid) to authenticated, anon, service_role;
grant execute on function app.user_email() to authenticated, anon, service_role;
