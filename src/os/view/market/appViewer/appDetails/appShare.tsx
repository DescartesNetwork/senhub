import { useState } from 'react'

import IonIcon from 'shared/ionicon'

import { Button, Space, Modal, Row, Col, Typography, Image, Input } from 'antd'
import Telegram from 'os/static/images/telegram.png'
import IconTele from 'os/static/images/icon-telegram.png'
import IconTwitter from 'os/static/images/icon-twitter.png'

const AppShare = ({ appId }: { appId: string }) => {
  const [visible, setVisible] = useState(false)
  const [shareLogo, setShareLogo] = useState<string>()

  return (
    <Space>
      {/* <IonIcon name="logo-twitter" onClick={() => {}} />
      <IonIcon name="paper-plane" onClick={() => {}} /> */}
      <Image
        src={IconTwitter}
        preview={false}
        onClick={() => {
          setVisible(!visible)
          setShareLogo(Telegram)
        }}
        style={{ cursor: 'pointer' }}
      />
      <Image
        src={IconTele}
        preview={false}
        onClick={() => {
          setVisible(!visible)
          setShareLogo(Telegram)
        }}
        style={{ cursor: 'pointer' }}
      />
      <Modal
        closable={false}
        visible={visible}
        onCancel={() => setVisible(false)}
        closeIcon={<IonIcon name="close" />}
        footer={null}
        centered
      >
        <Row
          gutter={[20, 20]}
          align="middle"
          justify="center"
          style={{ textAlign: 'center' }}
        >
          <Col span={24}>
            <Image src={shareLogo} preview={false} />
          </Col>
          <Col span={24}>
            <Typography.Title level={3}>
              Share this application
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Input
              prefix={
                <Button
                  type="text"
                  size="small"
                  style={{ marginLeft: -7 }}
                  icon={<IonIcon name="link-outline" />}
                />
              }
              suffix={
                <Button
                  type="text"
                  size="small"
                  icon={<IonIcon name="copy-outline" />}
                  onClick={() => {}}
                />
              }
              value={window.location.href}
            />
          </Col>
          <Col span={24}>
            <Button type="primary" onClick={() => {}}>
              Copy and Close
            </Button>
          </Col>
        </Row>
      </Modal>
    </Space>
  )
}

export default AppShare