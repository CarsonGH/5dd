# 5DD Auth (5 Dollar Database Authentication Service)
## Self-hosted (aws), built in golang, frontend support for React
Simple Authentication platform for those who want to selfhost.

Reasons for wanting to use 5DD over others:
- SelfHosted: You own your own data and only pay for what you need/use
- No redirects to external sites (stay in your own site)
- Complies with no 3rd party cookie policies being implemented in 2024
- Still uses http-only same-site cooies for primary token storage (more secure than localhost or same-site lax cookies, reinforced against XSS or CSRF attacks)
- built using go
- You use React or Svelete SPA frontends