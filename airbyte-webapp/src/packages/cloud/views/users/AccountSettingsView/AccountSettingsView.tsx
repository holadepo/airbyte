import React from "react";
import { FormattedMessage } from "react-intl";
import { useMutation } from "react-query";
import styled from "styled-components";

import { Button } from "components";

import { useAuthService } from "packages/cloud/services/auth/AuthService";
import { SettingsCard } from "pages/SettingsPage/pages/SettingsComponents";

import { EmailSection, NameSection, PasswordSection } from "./components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AccountSettingsView: React.FC = () => {
  const authService = useAuthService();
  const { mutateAsync: logout, isLoading: isLoggingOut } = useMutation(() => authService.logout());

  return (
    <>
      <NameSection />
      <EmailSection />
      {authService.hasPasswordLogin() && <PasswordSection />}
      <SettingsCard
        title={
          <Header>
            <FormattedMessage id="settings.accountSettings.logoutLabel" />
            <Button variant="danger" onClick={() => logout()} isLoading={isLoggingOut} data-testid="button.signout">
              <FormattedMessage id="settings.accountSettings.logoutText" />
            </Button>
          </Header>
        }
      />
    </>
  );
};

export { AccountSettingsView };
