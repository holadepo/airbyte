import React from "react";
import { FormattedMessage } from "react-intl";
import { useAsyncFn } from "react-use";
import styled from "styled-components";

import { Button, Switch } from "components";

interface IProps {
  allowSync?: boolean;
  enabled?: boolean;
  isSyncing?: boolean;
  isManual?: boolean;
  id: string;
  onChangeStatus: (id: string) => void;
  onSync: (id: string) => void;
}

const ProgressMessage = styled.div`
  padding: 7px 0;
`;

const StatusCell: React.FC<IProps> = ({ enabled, isManual, id, onChangeStatus, isSyncing, onSync, allowSync }) => {
  const [{ loading }, OnLaunch] = useAsyncFn(async (event: React.SyntheticEvent) => {
    event.stopPropagation();
    await onSync(id);
  }, []);

  if (!isManual) {
    const onSwitchChange = (event: React.SyntheticEvent) => {
      event.stopPropagation();
      onChangeStatus(id);
    };

    return <Switch checked={enabled} onChange={onSwitchChange} disabled={!allowSync} />;
  }

  if (isSyncing) {
    return (
      <ProgressMessage>
        <FormattedMessage id="tables.progress" />
      </ProgressMessage>
    );
  }

  return (
    <Button size="xs" onClick={OnLaunch} isLoading={loading} disabled={!allowSync}>
      <FormattedMessage id="tables.launch" />
    </Button>
  );
};

export default StatusCell;
