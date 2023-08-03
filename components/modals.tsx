import { observer } from 'mobx-react-lite';

import { appState } from '@/store'

export const Modals = observer(() => {
  const { modals } = appState;

  return (
    modals.length > 0
      ? <div className="l-layout__modal">
        {
          modals.map((el) => {
            const { modalContent, id, zIndex, closeModal } = el;

            return (
              <div key={id} className="c-modal" onClick={(e: any) => e.stopPropagation()} style={{ zIndex }}>
                <div className="c-modal__action-close" onClick={closeModal}>
                  <span className="c-modal__action-close-icon c-icon c-icon--close"/>
                </div>
                <>
                  {modalContent}
                </>
              </div>
            )
          })
        }
      </div>
      : null

  )
})

export const openDialogModal = (params: any) => {
  const {
    title,
    text,
    buttons,
  } = params

  const { closeModal } = appState.openModal(
    <div>
      <div>{title}</div>
      <div>{text}</div>
      {
        buttons.map(({ label, action }: any, i: number) => {
          return (
            <button
              key={i}
              onClick={() => {
                closeModal();
                if (action) {
                  action();
                }
              }}
            >
              {label}
            </button>
          )
        })
      }
    </div>
  )
}
