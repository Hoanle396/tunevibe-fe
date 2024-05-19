import { ConfigProvider, Pagination as AntdPagination, PaginationProps } from 'antd'
import clsx from 'clsx'


const Pagination = ({
  className,
  showSizeChanger = false,
  showQuickJumper = false,
  showLessItems = true,
  ...props
}: PaginationProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            controlOutlineWidth: 2,
            colorBgContainer: 'rgba(255, 255, 255, 0.03)',
            borderRadius: 10,
            colorText: '#ffffff',
            colorBorder: '#EEEEF2',
            padding: 30
          }
        }
      }}
    >
      <AntdPagination
        showLessItems={showLessItems}
        showSizeChanger={showSizeChanger}
        showQuickJumper={showQuickJumper}
        {...props}
        className={clsx(className)}
      />
    </ConfigProvider>
  )
}

export default Pagination
