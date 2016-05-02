from django.conf import settings

from allauth.account.adapter import DefaultAccountAdapter


class ApostelloAccountAdapter(DefaultAccountAdapter):
    def get_from_email(self):
        """Override to use SiteConfiguration, then fall back to settings."""
        from site_config.models import SiteConfiguration
        s = SiteConfiguration.get_solo()
        return s.email_from or settings.EMAIL_FROM
