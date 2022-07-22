import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  ViroARScene,
  ViroNode,
  Viro3DObject,
  ViroARPlaneSelector,
  ViroSpotLight,
  ViroQuad,
  ViroAmbientLight,
} from '@viro-community/react-viro';
const resources = [
  require('../../res/drone/black.jpeg'),
  require('../../res/drone/gold.jpeg'),
  require('../../res/drone/silver.jpeg'),
  require('../../res/drone/cobre.jpeg'),
];

export default function DroneScene({ arSceneNavigator }) {
  const [pauseUpdates, setPauseUpdates] = useState(false);
  const {
    withShadow,
    startLoad,
    endLoad,
    runAnimation,
  } = arSceneNavigator.viroAppProps;

  return useMemo(
    () => (
      <ViroARScene>
        <ViroARPlaneSelector>
          {!withShadow && <ViroAmbientLight color="#ffffff" />}
          <ViroNode position={[0,0,-1]} dragType="FixedToWorld" onDrag={()=>{}} >
            {withShadow && (
              <ViroSpotLight
                attenuationStartDistance={5}
                attenuationEndDistance={10}
                color="#ffffff"
                direction={[0, -0.5, -0.2]}
                position={[0, 3, 1]}
                innerAngle={5}
                outerAngle={20}
                castsShadow={withShadow}
                shadowNearZ={2}
                shadowFarZ={3.5}
                shadowOpacity={0.6}
              />
            )}
            <Viro3DObject
              position={[0, .1, 0]}
              scale={[.2, .2, .2]}
              resources={resources}
              type="OBJ"
              onLoadStart={startLoad}
              onLoadEnd={endLoad}
              source={require('../../res/drone/ObjHuman.obj')}
            />
          </ViroNode>
          {withShadow && (
            <ViroQuad
              position={[0, 0, 0]}
              rotation={[-90, 0, 0]}
              width={2}
              height={2}
              arShadowReceiver
            />
          )}
        </ViroARPlaneSelector>
      </ViroARScene>
    ),
    [pauseUpdates, withShadow, startLoad, endLoad, runAnimation],
  );
}
