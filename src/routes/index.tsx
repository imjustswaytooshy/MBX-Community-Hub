/*
 * MBX, Community Based Project
 * Copyright (c) 2024 SiriusB_
 * SPDX-License-Identifier: MIT
 */

import { Layout } from "@components/Layout";
import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ProfilePage = lazy(() => import("@routes/ProfilePage"));

export const AppRoutes: FC = () => (
    <Suspense
        fallback={<div className="text-center text-white">Loading...</div>}
    >
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <ProfilePage />
                    </Layout>
                }
            />
        </Routes>
    </Suspense>
);
