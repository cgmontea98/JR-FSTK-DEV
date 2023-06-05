import { ViewTask } from "./ViewTask"
import { PendingTask } from "./PendingTask"
import { CompletedTask } from "./CompletedTask"

export const Nav = () => {
  return (
    <>
      <ViewTask/>
      <PendingTask/>
      <CompletedTask/>
    </>
  )
}
