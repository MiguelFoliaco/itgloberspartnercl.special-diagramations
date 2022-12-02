import React, { ReactNode } from 'react'
import { useCssHandles } from "vtex.css-handles";
import { CustomGridSchema } from '../schemas/CustomGridSchema';
type prop = {
  gridType: number;
  children: ReactNode[];
  gap: number;
  marginTop: number;
  marginBottom: number;
}
const SpecialDiagramation = ({ gridType = 1, children, gap = 5, marginBottom = 10, marginTop = 10 }: prop) => {

  const CSS_HANDLES = ['special_diagramation_grid', `special_diagramation_grid_item_${gridType}`];
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div style={{ gridGap: gap, marginBottom, marginTop }} className={`${handles.special_diagramation_grid} ${handles[`special_diagramation_grid_item_${gridType}`]}`}>
      {
        children
      }
    </div>
  )
}

SpecialDiagramation.schema = CustomGridSchema;

export { SpecialDiagramation }
