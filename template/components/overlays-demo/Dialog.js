import React, { useState } from 'react'

// Prime components
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

const CustomDialog = () => {
  const [display, setDisplay] = useState(false)

  const dialogFooter = (
    <div>
      <Button
        icon='pi pi-check'
        onClick={() => setDisplay(false)}
        label='Yes'
      />
      <Button
        icon='pi pi-times'
        onClick={() => setDisplay(false)}
        label='No'
        className='p-button-secondary'
      />
    </div>
  )

  return (
    <div className='card'>
      <h1>Dialog</h1>
      <Dialog
        header='Godfather I'
        visible={display}
        modal
        width='400px'
        footer={dialogFooter}
        onHide={() => setDisplay(false)}
      >
        <p>
          The story begins as Don Vito Corleone, the head of a New York Mafia
          family, oversees his daughter-s wedding. His beloved son Michael has
          just come home from the war, but does not intend to become part of his
          father-s business. Through Michael-s life the nature of the family
          business becomes clear. The business of the family is just like the
          head of the family, kind and benevolent to those who give respect, but
          given to ruthless violence whenever anything stands against the good
          of the family.
        </p>
      </Dialog>
      <Button
        icon='pi pi-external-link'
        label='Show'
        onClick={() => setDisplay(true)}
      />
    </div>
  )
}

export default CustomDialog
