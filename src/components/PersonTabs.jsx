import { useState } from 'react'
import { Box, Tabs, Tab } from '@mui/material'

export default function PersonTabs({ labels, children }) {
  const [value, setValue] = useState(0)
  return (
    <Box>
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        TabIndicatorProps={{ style: { backgroundColor: '#B8763D' } }}
        sx={{ mb: 4, borderBottom: '1px solid', borderColor: 'divider', minHeight: 'auto' }}
      >
        {labels.map((label) => (
          <Tab
            key={label}
            label={label}
            sx={{
              fontFamily: "'Fraunces', serif",
              textTransform: 'none',
              fontSize: '1.05rem',
              color: 'text.secondary',
              '&.Mui-selected': { color: 'text.primary' },
            }}
          />
        ))}
      </Tabs>
      {children[value]}
    </Box>
  )
}
